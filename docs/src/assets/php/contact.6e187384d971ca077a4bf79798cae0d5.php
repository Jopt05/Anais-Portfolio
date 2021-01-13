<?php
    if($_POST){
        $email_body = "<div>";
        
        
        $visitor_name = ($_POST['name']);
        $email_body .= "<div>
                        <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                        </div>";



        $visitor_email = ($_POST['email']);
        $email_body .= "<div>
                        <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";

        $visitor_message = ($_POST['message']);
        $email_body .= "<div>
                        <label><b>Visitor Message:</b></label>
                        <div>".$visitor_message."</div>
                        </div>";
        
        $cabeceras = 'MIME-Version: 1.0' . "\r\n";
        $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        
        mail("anais_hdz@outlook.com", $visitor_email, $email_body, $cabeceras);
    }
?>