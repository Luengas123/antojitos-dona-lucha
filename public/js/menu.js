export function leerMenu() {
  const texto = "Menú del día: Quesadillas de flor de calabaza, gorditas de chorizo, tacos dorados de pollo.";
  const voz = new SpeechSynthesisUtterance(texto);
  speechSynthesis.speak(voz);
}
