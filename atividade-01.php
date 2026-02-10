<?php

class MaquinaDeCortarCabelo {
    public $modelo;
    public $marca;
    public $cor;

    
    public function modelo() {
        return "Olá, minha máquina é do modelo " . $this->modelo . ".";
    }
    public function cortar() {
        return "Cortando cabelo com a máquina " . $this->marca . " de modelo " . $this->modelo . ".";
    }
    public function cor() {
        return "A cor da minha máquina é " . $this->cor . ".";
    }

}
$msquina = new MaquinaDeCortarCabelo();
$msquina->modelo = "Xiaomi";
echo $msquina->marca = "Philips";
echo "<br>";
echo $msquina->cor = "Preta";


class Carteira {
    public $material;
    public $marca;

    public function material() {
        return "Minha carteira é feita de " . $this->material . ".";
    }

    public function guardar() {
        return "Guardando dinheiro na carteira da marca " . $this->marca . ".";
    }

    public function cor() {
        return "A cor da minha carteira é " . $this->cor . ".";
    }
}

$carteira = new Carteira();
$carteira->material = "couro";
echo $carteira->marca = "Gucci";
echo "<br>";
echo $carteira->cor = "Marrom";




class Computador {
    public $marca;
    public $processador;
    public $cor;

    public function marca() {
        return "Meu computador é da marca " . $this->marca . ".";
    }

    public function ligar() {
        return "Ligando o computador com processador " . $this->processador . ".";
    }

    public function cor() {
        return "A cor do computador é " . $this->cor . ".";
    }
}

$computador = new Computador();
$computador->marca = "Dell";
$computador->processador = "Intel Core i7";
echo $computador->cor = "Preto";
echo "<br>";

class Celular {
    public $modelo;
    public $marca;
    public $cor;

    public function modelo() {
        return "Meu celular é do modelo " . $this->modelo . ".";
    }

    public function ligar() {
        return "Ligando o celular da marca " . $this->marca . ".";
    }

    public function cor() {
        return "A cor do meu celular é " . $this->cor . ".";
    }
}

$celular = new Celular();
$celular->modelo = "iPhone 13";
$celular->marca = "Apple";
echo $celular->cor = "Prata";
echo "<br>";


class Planta {
    public $especie;
    public $hidrofobica;
    public $hidrofilica;

    public function especie() {
        return "Minha planta é da espécie " . $this->especie . ".";
    }

    public function regar() {
        return "Regando a planta hidrofílica: " . $this->hidrofilica . ".";
    }

    public function tipo() {
        return "Planta hidrofóbica: " . $this->hidrofobica . ".";
    }
}

$planta = new Planta();
$planta->especie = "Rosa";
$planta->hidrofobica = "Sim";
$planta->hidrofilica = "Não";
echo $planta->tipo() . "\n";
echo "<br>";
echo $planta->regar() . "\n";
?>