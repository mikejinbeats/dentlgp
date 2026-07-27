import assert from "node:assert/strict";
import test from "node:test";
import { themes } from "../app/data.js";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("quiz questions never reveal the answer in the question text", () => {
  const items = themes.flatMap((theme) => theme.items);
  assert.equal(items.length, 18);

  for (const item of items) {
    assert.ok(item.quizPrompt, `Missing quiz question for ${item.word}`);
    const question = item.quizPrompt.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("pt-PT");
    const answer = item.word.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("pt-PT");
    assert.equal(
      question.includes(answer),
      false,
      `Question for ${item.word} contains the answer`,
    );
  }
});
