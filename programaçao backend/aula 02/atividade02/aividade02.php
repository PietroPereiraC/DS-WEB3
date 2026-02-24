<?php
class Animal {
    public function fazerSom(){
        return "Som";
    }

    public function mover(){
        return "pula";
    }
}
class sapo extends Animal {
    public $nome = "Sapo";
    public function fazerSom(){
        return "coaxia";
    }
}

class cavalo extends Animal {
    public $nome = "Cavalo";
    public function fazerSom(){
        return "relincha";
    }

    public function mover(){
        return "corre " . parent::mover();
    }
}

class tartaruga extends Animal {
    public $nome = "Tartaruga";
    public function fazerSom(){
        return "geme";
    }

    public function mover(){
        return "anda devagar " . parent::mover();
    }
}

$pluto = new sapo();
echo $pluto->nome . "<br/>";
echo $pluto->fazerSom() . "<br/>";
echo $pluto->mover() . "<br/>";

echo "-------------------------<br/>";

$garfield = new cavalo();
echo $garfield->nome . "<br/>";
echo $garfield->fazerSom() . "<br/>";
echo $garfield->mover() . "<br/>";

echo "-------------------------<br/>";

$ave = new tartaruga();
echo $ave->nome . "<br/>";

echo $ave->fazerSom() . "<br/>";
echo $ave->mover() . "<br/>";
?>