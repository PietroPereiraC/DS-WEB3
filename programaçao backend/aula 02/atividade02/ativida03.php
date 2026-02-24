<?php
class Veiculo {
    public $marca;
    public $modelo;
    private $velocidade;

    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidade = 0;
    }

    
    public function getVelocidade() {
        return $this->velocidade;
    }

    
    public function setVelocidade($velocidade) {
        $this->velocidade = $velocidade;
    }

    public function exibirVelocidade() {
        echo "Velocidade atual de {$this->marca} {$this->modelo}: {$this->velocidade} km/h<br/>";
    }
}


class Carro extends Veiculo {
    public function acelerar() {
    
        $novaVelocidade = $this->getVelocidade() + 10;
        $this->setVelocidade($novaVelocidade);
        echo "Carro acelerou para {$novaVelocidade} km/h<br/>";
    }
}


class Moto extends Veiculo {
    public function acelerar() {
        // Moto acelera +20
        $novaVelocidade = $this->getVelocidade() + 20;
        $this->setVelocidade($novaVelocidade);
        echo "Moto acelerou para {$novaVelocidade} km/h<br/>";
    }
}

$carro = new Carro("Toyota", "Corolla");
$moto = new Moto("Honda", "CB500");

echo "<b>Carro:</b><br/>";
$carro->exibirVelocidade();
$carro->acelerar();
$carro->exibirVelocidade();

echo "<br/><b>Moto:</b><br/>";
$moto->exibirVelocidade();
$moto->acelerar();
$moto->exibirVelocidade();
?>