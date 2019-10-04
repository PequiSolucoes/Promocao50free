<?php 
if(isset($_POST['email']) && !empty($_POST['email'])){
$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);
$to = "contato@pequisolucoes.com";
$subject = "Contato - Formulário";
$body = "Nome: ".$nome."\r\n".
	"Email: ".$email."\r\n".
	"Mensagem: ".$mensagem;
$header	= "From:1012951@gmail.com"."\r\n".
			"Reply-To:".$email."\r\n".
			"X=Mailer:PHP/".phpversion();
if(mail($to,$subject,$body,$header)){
	echo"<script>('$msg');window.location.assign('https://50free.midiaclub.app/obrigado.html');</script>";
} else{
	echo("Email não pode ser enviado");
}
}


// Mensagem
$msg = "Caro Usuario;\n
Estamos te enviando esse email como uma forma de agradecimento, pois vimos que você acabou de se inscrever na nossa plataforma!
\nEsperamos que a Mídia Club possa te ajudar a alcançar seus objetivos, estaremos aqui para ver seus feedbacks e iremos resolvê-los o mais rápido possível.
\nMais tarde entraremos em contato com você, e apresentaremos os resultados do processo seletivo!
\nAgradecemos sua atenção!\nAté daqui a pouco.";


$msg = wordwrap($msg,70);

// Envia email
mail($email, "[Agradecimento MIDIA CLUB] Obrigado pelo Cadastro",$msg);


?>