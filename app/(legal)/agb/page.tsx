export default function AGBPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
            
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">§1 Zahlungsbedingungen</h2>
                <p className="mb-4">
                  (1) Vor Beginn des Projekts wird eine Gebühr von 50 € fällig, die nicht Teil des vereinbarten Preises für die Website ist. Diese Gebühr dient zur Absicherung des Auftrags.
                </p>
                <p className="mb-4">
                  (2) Der verbleibende Betrag des vereinbarten Preises ist erst nach Fertigstellung der Website und der Abnahme durch den Kunden zu zahlen.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">§2 Hosting-Kosten</h2>
                <p className="mb-4">
                  (1) Die Kosten für das Hosting der Website trägt der Kunde. Diese Kosten können je nach Größe der Website und der gewählten Domain variieren und werden im Rahmen der Planung ermittelt.
                </p>
                <p className="mb-4">
                  (2) Solange die Website von Codezan.de gehostet wird, ist der Kunde verpflichtet, den monatlichen Betrag pünktlich zu zahlen. Sollte Codezan.de nach zwei Mahnungen keine Zahlung erhalten, wird die Website automatisch deaktiviert.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">§3 Haftung</h2>
                <p className="mb-4">
                  (1) Codezan.de haftet ausschließlich für den erstellten Backend-Code der Website.
                </p>
                <p className="mb-4">
                  (2) Für Inhalte, die auf der Website veröffentlicht werden, ist allein der Kunde verantwortlich. Codezan.de übernimmt keine Haftung für rechtliche oder inhaltliche Verstöße.
                </p>
                <p className="mb-4">
                  (3) Bei Serverausfällen oder technischen Problemen, die durch externe Hosting-Dienstleister verursacht werden, ist Codezan.de nicht haftbar.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">§4 Rücktritt und Kündigung</h2>
                <p className="mb-4">
                  (1) Der Kunde kann jederzeit vom Vertrag zurücktreten. Bereits gezahlte Gebühren werden nicht erstattet.
                </p>
                <p className="mb-4">
                  (2) Codezan.de behält sich das Recht vor, Verträge zu kündigen, wenn der Kunde wiederholt seinen Zahlungspflichten nicht nachkommt.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">§5 Änderungen und Ergänzungen</h2>
                <p className="mb-4">
                  (1) Änderungen oder Ergänzungen dieser Allgemeinen Geschäftsbedingungen werden dem Kunden schriftlich mitgeteilt.
                </p>
                <p className="mb-4">
                  (2) Sollte eine Bestimmung dieser Allgemeinen Geschäftsbedingungen unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
