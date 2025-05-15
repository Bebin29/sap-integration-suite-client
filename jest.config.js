module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/units/**/*.test.js'
  ],
  verbose: true,
  testTimeout: 30000, // erhöhtes Timeout für API-Aufrufe
  maxWorkers: 1, // Reduzierung auf einen Worker, um Probleme mit paralleler Ausführung zu vermeiden
  snapshotSerializers: [], // Leere Liste, da wir keine Serialisierer verwenden
  setupFilesAfterEnv: ['./jest.setup.js'], // Setup-Datei einbinden
}; 