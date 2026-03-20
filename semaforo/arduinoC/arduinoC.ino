int tempo = 20000; // começa no modo lento

void setup() {
  pinMode(8, OUTPUT);   // Verde
  pinMode(11, OUTPUT);  // Amarelo
  pinMode(12, OUTPUT);  // Vermelho

  Serial.begin(9600);

  Serial.println("Controle do Semaforo");
  Serial.println("Digite:");
  Serial.println("1 = Lento (20s)");
  Serial.println("2 = Medio (15s)");
  Serial.println("3 = Rapido (10s)");
}

int verifica() {

  // VERIFICA SE DIGITOU ALGO NO MONITOR SERIAL
  if (Serial.available() > 0) {
    char modo = Serial.read();

    if (modo == '1') {
      tempo = 20000;
      Serial.println("Modo LENTO ativado");
    }

    if (modo == '2') {
      tempo = 15000;
      Serial.println("Modo MEDIO ativado");
    }

    if (modo == '3') {
      tempo = 10000;
      Serial.println("Modo RAPIDO ativado");
    }
  }

  return tempo;

}

void loop() {

  Serial.println(verifica());
  
  // VERDE
  digitalWrite(8, HIGH);
  delay(verifica());
  digitalWrite(8, LOW);

  // AMARELO
  digitalWrite(11, HIGH);
  delay(verifica() / 3);
  digitalWrite(11, LOW);

  // VERMELHO
  digitalWrite(12, HIGH);
  delay(verifica());
  digitalWrite(12, LOW);

}