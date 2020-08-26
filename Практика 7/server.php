<?php
$_POST = json_decode(file_get_contents("php://input"), true); // позволяет php получить и работать с json данными
echo var_dump($_POST); // берет данные которые пришли с клиента, преврашает их в строку и показывает обратно на клиенте. response который приходит от сервера