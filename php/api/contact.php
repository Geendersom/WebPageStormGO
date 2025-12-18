<?php
/**
 * Contact API - Processa formulário de contato
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Permite apenas requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido'
    ]);
    exit;
}

// Lê dados JSON do corpo da requisição
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Valida dados
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Dados incompletos'
    ]);
    exit;
}

$name = trim($data['name']);
$email = trim($data['email']);
$message = trim($data['message']);

// Validações
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Todos os campos são obrigatórios'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Email inválido'
    ]);
    exit;
}

// Processa o contato (aqui você pode salvar no banco de dados, enviar email, etc.)
try {
    // Exemplo: Salvar em arquivo (em produção, use banco de dados)
    $contactData = [
        'name' => $name,
        'email' => $email,
        'message' => $message,
        'date' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    // Salva em arquivo JSON (substitua por banco de dados em produção)
    $contactsFile = __DIR__ . '/../../data/contacts.json';
    $contactsDir = dirname($contactsFile);
    
    if (!is_dir($contactsDir)) {
        mkdir($contactsDir, 0755, true);
    }
    
    $contacts = [];
    if (file_exists($contactsFile)) {
        $contacts = json_decode(file_get_contents($contactsFile), true) ?? [];
    }
    
    $contacts[] = $contactData;
    file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT));
    
    // Aqui você pode enviar um email de notificação
    // mail($adminEmail, 'Novo contato - Storm GO', $message);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso!'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao processar mensagem: ' . $e->getMessage()
    ]);
}
?>

