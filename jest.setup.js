/**
 * Jest Setup-Datei
 * 
 * Diese Datei wird vor allen Tests ausgeführt und konfiguriert die Testumgebung.
 */

// Mocks für HTTP-Anfragen einrichten, um zirkuläre Referenzen zu vermeiden
const originalStringify = JSON.stringify;
JSON.stringify = function(obj, ...rest) {
  try {
    return originalStringify(obj, ...rest);
  } catch (error) {
    if (error.message && error.message.includes('circular structure')) {
      // Bei zirkulären Strukturen geben wir ein vereinfachtes Objekt zurück
      return originalStringify({
        _circular: true,
        type: obj && obj.constructor ? obj.constructor.name : typeof obj
      });
    }
    throw error;
  }
};

// Weiteren Test-Setup hier hinzufügen... 