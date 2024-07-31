script.js
function sendPanicAlert() {
  alert("Alerta de pânico enviado!");
  // Aqui você pode adicionar a lógica para enviar o alerta ao servidor
}

function hideModal() {
  document.getElementById('modal').style.display = 'none';
}

// Exemplo de como adicionar alertas à lista
const alerts = [
  'Alerta 1: Descrição do alerta.',
  'Alerta 2: Descrição do alerta.',
  'Alerta 3: Descrição do alerta.'
];

const alertList = document.getElementById('alert-list');
alerts.forEach(alert => {
  const li = document.createElement('li');
  li.textContent = alert;
  alertList.appendChild(li);
});
