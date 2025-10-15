import { useState } from "react";
const useProofreader = () => {
  const [proof, setProof] = useState("");
  const [checking, setChecking] = useState(false);
  const proofread = async (text) => {
    if (!text) return setProof("Write body text first to proofread.");
    setChecking(true);
    try {
      const params = new URLSearchParams();
      params.append("text", text);
      params.append("language", "en-US");
      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const data = await res.json();
      if (data.matches?.length > 0) {
        const issues = data.matches
          .map(
            (m, i) =>
              `${i + 1}. ${m.message} (suggest: ${
                m.replacements[0]?.value ?? "—"
              })`
          )
          .join("\n");
        setProof(issues);
      } else {
        setProof("No issues found ✅");
      }
    } catch (err) {
      console.error(err);
      setProof("Proofreading failed. Try again later.");
    } finally {
      setChecking(false);
    }
  };
  const clearProof = () => setProof("");
  return { proof, checking, proofread, clearProof };
};
export default useProofreader;
