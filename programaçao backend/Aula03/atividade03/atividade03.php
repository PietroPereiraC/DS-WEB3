<?php

class fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }

    public function exibirDados() {
        return "Olá, meu nome é {$this->nome} e sou do país {$this->paisOrigem}.";
    }
    public function alterarDados($novoNome, $novoPaisOrigem) {
        $this->nome = $novoNome;
        $this->paisOrigem = $novoPaisOrigem;
    }
}
class motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }

    public function exibirDados() {
        return "Olá, minha potência é {$this->potencia} e uso {$this->combustivel}.";
    }
    public function alterarDados($novaPotencia, $novoCombustivel) {
        $this->potencia = $novaPotencia;
        $this->combustivel = $novoCombustivel;
    }
}
class carroo {
    public $modelo;
    public $ano;
    public $fabricante;
    public $motor;
    public $metotodo;


    public function __construct($modelo, $ano, $fabricante, $motor) {
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirDados() {
        return "{$this->modelo} | {$this->ano}<br>Fabricante: " . ($this->fabricante->nome) . " | Origem: {$this->fabricante->paisOrigem}<br>Motor: {$this->motor->potencia} | Combustível: " . ($this->motor->combustivel);
    }
    public function alterarDados($novoModelo, $novoAno, $novoFabricante, $novoMotor) {
        $this->modelo = $novoModelo;
        $this->ano = $novoAno;
        $this->fabricante = $novoFabricante;
        $this->motor = $novoMotor;
    }
}

$fabricante1 = new fabricante("Honda", "Japão");
$motor1 = new motor("150 cv", "Flex");
$carro1 = new carroo("Civic", 2024, $fabricante1, $motor1);
echo $carro1->exibirDados();

?>