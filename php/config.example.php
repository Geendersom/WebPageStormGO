<?php
/**
 * Configurações da aplicação - Arquivo de exemplo
 * 
 * INSTRUÇÕES:
 * 1. Copie este arquivo para config.php: cp config.example.php config.php
 * 2. Edite config.php com suas configurações reais
 * 3. NUNCA commite config.php no repositório (já está no .gitignore)
 */

// Configurações de ambiente
define('ENVIRONMENT', 'development'); // development, production

// Configurações de email
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'seu-email@gmail.com'); // Configure seu email
define('SMTP_PASS', 'sua-senha-aqui'); // Configure sua senha
define('FROM_EMAIL', 'noreply@stormgo.com');
define('FROM_NAME', 'Storm GO');
define('ADMIN_EMAIL', 'admin@stormgo.com'); // Email para receber contatos

// Configurações de banco de dados (se necessário)
define('DB_HOST', 'localhost');
define('DB_NAME', 'stormgo');
define('DB_USER', 'root');
define('DB_PASS', '');

// Configurações de segurança
define('ALLOWED_ORIGINS', [
    'http://localhost',
    'https://stormgo.com',
    'https://www.stormgo.com'
]);

// Timezone
date_default_timezone_set('America/Sao_Paulo');

// Error reporting
if (ENVIRONMENT === 'development') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
?>

