import { INTERACTION_MATRIX } from '@/data/matrix';
import { RULES } from '@/data/rules';

export function InteractionGrid() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-pli-border">
      <table className="min-w-[760px] border-separate border-spacing-1 text-xs sm:min-w-full">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-white p-2 text-left text-pli-slate">Influenced ↓ / Influencing →</th>
            {RULES.map(rule => (
              <th key={rule.id} className="min-w-24 bg-white p-2 text-left text-pli-slate">{rule.shortTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RULES.map((rowRule, rowIndex) => (
            <tr key={rowRule.id}>
              <td className="sticky left-0 z-10 rounded-lg bg-white p-2 font-medium">{rowRule.shortTitle}</td>
              {INTERACTION_MATRIX[rowIndex].map((value, col) => (
                <td
                  key={col}
                  className="rounded-lg p-2 text-center"
                  style={{ backgroundColor: `rgba(25,90,99,${value * 1.8})`, color: value > 0.15 ? 'white' : '#18333A' }}
                >
                  {value.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
