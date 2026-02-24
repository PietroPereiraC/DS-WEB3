<?php
abstract class Produto {
    protected $nome;
    protected $preco;
    protected $estoque;

    public function __construct($nome, $preco, $estoque) {
        $this->nome = $nome;
        $this->preco = $preco;
        $this->estoque = $estoque;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getPreco() {
        return $this->preco;
    }

    public function getEstoque() {
        return $this->estoque;
    }

 
    abstract public function calcularDesconto();
}

class Eletronico extends Produto {
    public function calcularDesconto() {
        $desconto = 0.10; 
        $precoFinal = $this->preco * (1 - $desconto);
        if ($this->estoque < 5) {
            $precoFinal *= 0.90; 
        }
        return $precoFinal;
    }
}

class Roupa extends Produto {
    public function calcularDesconto() {
        $desconto = 0.20; 
        $precoFinal = $this->preco * (1 - $desconto);
        if ($this->estoque < 5) {
            $precoFinal *= 0.90;
        }
        return $precoFinal;
    }
}


$tv = new Eletronico("Smart TV", 3000, 3);
$camisa = new Roupa("Camisa Polo", 100, 10);
$fone = new Eletronico("Fone Bluetooth", 200, 7);
$calca = new Roupa("Calça Jeans", 150, 2);

$produtos = [$tv, $camisa, $fone, $calca];

foreach ($produtos as $produto) {
    echo "Produto: " . $produto->getNome() . "<br/>";
    echo "Preço original: R$ " . number_format($produto->getPreco(), 2, ',', '.') . "<br/>";
    echo "Estoque: " . $produto->getEstoque() . "<br/>";
    echo "Preço com desconto: R$ " . number_format($produto->calcularDesconto(), 2, ',', '.') . "<br/><br/>";
}
?>