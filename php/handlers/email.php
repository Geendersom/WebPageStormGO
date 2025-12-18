<?php
/**
 * Email Handler - Envia emails de contato
 */

class EmailHandler {
    private $smtpHost;
    private $smtpPort;
    private $smtpUser;
    private $smtpPass;
    private $fromEmail;
    private $fromName;
    
    public function __construct($config = []) {
        $this->smtpHost = $config['smtp_host'] ?? 'smtp.gmail.com';
        $this->smtpPort = $config['smtp_port'] ?? 587;
        $this->smtpUser = $config['smtp_user'] ?? '';
        $this->smtpPass = $config['smtp_pass'] ?? '';
        $this->fromEmail = $config['from_email'] ?? 'noreply@stormgo.com';
        $this->fromName = $config['from_name'] ?? 'Storm GO';
    }
    
    /**
     * Envia email de contato
     */
    public function sendContactEmail($to, $name, $email, $message) {
        $subject = "Novo contato - Storm GO: {$name}";
        
        $body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #6366f1; }
                .value { margin-top: 5px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Novo Contato - Storm GO</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <div class='label'>Nome:</div>
                        <div class='value'>{$name}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Email:</div>
                        <div class='value'>{$email}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Mensagem:</div>
                        <div class='value'>{$message}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        ";
        
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            "From: {$this->fromName} <{$this->fromEmail}>",
            "Reply-To: {$name} <{$email}>"
        ];
        
        return mail($to, $subject, $body, implode("\r\n", $headers));
    }
    
    /**
     * Envia email de confirmação para o usuário
     */
    public function sendConfirmationEmail($to, $name) {
        $subject = "Recebemos sua mensagem - Storm GO";
        
        $body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Obrigado pelo contato, {$name}!</h2>
                </div>
                <div class='content'>
                    <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
                    <p>Enquanto isso, que tal conhecer mais sobre o Storm GO?</p>
                </div>
            </div>
        </body>
        </html>
        ";
        
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            "From: {$this->fromName} <{$this->fromEmail}>"
        ];
        
        return mail($to, $subject, $body, implode("\r\n", $headers));
    }
}
?>

