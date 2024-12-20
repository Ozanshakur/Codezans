export default function DatenschutzPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
            
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Verantwortlicher</h2>
                <p className="mb-4">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mb-4">
                  Jonas Ozan<br />
                  E-Mail: kontakt@codezan.de<br />
                  Website: Codezan.de
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <h3 className="text-lg font-medium mb-2">a) Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie das Kontaktformular auf meiner Website nutzen, erhebe ich folgende Daten:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Ihren Namen</li>
                  <li>Ihre E-Mail-Adresse</li>
                </ul>
                <p className="mb-4">
                  Diese Daten werden ausschließlich verwendet, um Ihre Anfrage zu bearbeiten. Nach Abschluss der Kontaktaufnahme werden diese Daten unverzüglich gelöscht.
                </p>
                <h3 className="text-lg font-medium mb-2">b) Daten für die Erstellung von Websites</h3>
                <p className="mb-4">
                  Im Rahmen der Erstellung Ihrer Website erhebe ich die folgenden Daten:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Vollständiger Name</li>
                  <li>Geschäftsadresse</li>
                  <li>Steueridentifikationsnummer</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                </ul>
                <p className="mb-4">
                  Diese Daten sind erforderlich, um die Erstellung, das Hosting und die gesetzlich vorgeschriebenen Angaben auf Ihrer Website zu gewährleisten. Ihre Daten werden solange gespeichert, wie Ihre Website aktiv ist. Nach Stilllegung der Website oder auf Ihren Wunsch hin werden Ihre Daten gelöscht.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">3. Weitergabe von Daten</h2>
                <p className="mb-4">
                  Eine Weitergabe Ihrer Daten erfolgt nur:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>an Dienstleister, die für das Hosting Ihrer Website notwendig sind</li>
                  <li>zur Veröffentlichung von gesetzlich vorgeschriebenen Informationen auf Ihrer Website</li>
                </ul>
                <p className="mb-4">
                  Eine darüber hinausgehende Weitergabe Ihrer Daten an Dritte erfolgt nicht.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">4. Cookies</h2>
                <p className="mb-4">
                  Auf meiner Website werden Cookies verwendet, um die Funktionalität und Benutzerfreundlichkeit zu gewährleisten. Cookies sind kleine Dateien, die auf Ihrem Endgerät gespeichert werden. Die gespeicherten Cookies werden nicht automatisch gelöscht. Sie haben jedoch die Möglichkeit, diese Cookies selbst über Ihre Browser-Einstellungen zu entfernen.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">5. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Auskunft: Sie können jederzeit Auskunft darüber verlangen, welche personenbezogenen Daten über Sie gespeichert sind.</li>
                  <li>Berichtigung: Sollten Ihre Daten unrichtig oder unvollständig sein, haben Sie das Recht, diese berichtigen zu lassen.</li>
                  <li>Löschung: Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.</li>
                  <li>Einschränkung der Verarbeitung: Unter bestimmten Voraussetzungen können Sie eine Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
                  <li>Widerspruch: Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">6. Haftungsausschluss</h2>
                <p className="mb-4">
                  Ich übernehme keine Haftung für Inhalte oder Funktionalitäten der von mir erstellten Websites. Die Verantwortung für rechtliche und inhaltliche Aspekte der Websites liegt allein bei den jeweiligen Kunden.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
                <p className="mb-4">
                  Ich behalte mir das Recht vor, diese Datenschutzerklärung bei Bedarf zu ändern. Die jeweils aktuelle Version ist auf meiner Website verfügbar.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
