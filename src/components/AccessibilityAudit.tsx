type Props = {
    violations: any[];
  };
  
  export default function AccessibilityAudit({ violations }: Props) {
    const total = violations.length;
    const critical = violations.filter((v) => v.impact === "critical").length;
    const serious = violations.filter((v) => v.impact === "serious").length;
    const moderate = violations.filter((v) => v.impact === "moderate").length;
    const minor = violations.filter((v) => v.impact === "minor").length;
  
    const statColor = (impact: string) => {
      switch (impact) {
        case "critical":
          return "text-red-700";
        case "serious":
          return "text-yellow-700";
        case "moderate":
          return "text-orange-700";
        case "minor":
          return "text-green-700";
        default:
          return "text-gray-700";
      }
    };
  
    return (
      <aside
        aria-label="Accessibility audit summary"
        className="border rounded-xl p-6 bg-gray-50 shadow-sm w-full lg:max-w-xs"
      >
        <h3 className="text-xl font-semibold mb-6">Summary</h3>
        <ul className="space-y-3 text-gray-800 text-lg font-medium">
          <li>
            Total issues: <span className="font-bold">{total}</span>
          </li>
          <li className={statColor("critical")}>
            Critical: <span className="font-bold">{critical}</span>
          </li>
          <li className={statColor("serious")}>
            Serious: <span className="font-bold">{serious}</span>
          </li>
          <li className={statColor("moderate")}>
            Moderate: <span className="font-bold">{moderate}</span>
          </li>
          {minor > 0 && (
            <li className={statColor("minor")}>
              Minor: <span className="font-bold">{minor}</span>
            </li>
          )}
        </ul>
      </aside>
    );
  }
  