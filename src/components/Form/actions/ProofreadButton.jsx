const ProofreadButton = ({ checking, proofread }) => (
  <button
    type="button"
    onClick={proofread}
    disabled={checking}
    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
  >
    {checking ? "Checking..." : "Proofread"}
  </button>
);
export default ProofreadButton;
