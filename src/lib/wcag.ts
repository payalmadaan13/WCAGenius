export type Impact = "minor" | "moderate" | "serious" | "critical";

const impactWeight: Record<Impact, number> = {
  minor: 5,
  moderate: 10,
  serious: 20,
  critical: 30,
};

export function calculateScore(violations: { impact: Impact }[]) {
  const maxScore = 100;

  const penalty = violations.reduce((sum, v) => {
    return sum + (impactWeight[v.impact] || 0);
  }, 0);

  const score = Math.max(maxScore - penalty, 0);

  let status: "PASS" | "NEEDS_ATTENTION" | "FAIL";

  if (score >= 90) status = "PASS";
  else if (score >= 70) status = "NEEDS_ATTENTION";
  else status = "FAIL";

  return { score, status };
}
