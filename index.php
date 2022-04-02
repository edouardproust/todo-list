<?php
$title = "Todo List";
require 'config.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= APP_PATH ?>style.css">
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <!-- scripts -->
    <script defer src='<?= APP_PATH ?>src/TodoList.js'></script>
    <script defer src='<?= APP_PATH ?>src/TodoItem.js'></script>
    <script defer src='<?= APP_PATH ?>app.js'></script>
    <title><?= $title ?></title>
</head>

<body>
    <header>
        <h1><?= $title ?></h1>
    </header>
    <div class="alert"></div>
    <form>
        <input type="text" class="input">
        <button class="input-btn">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </form>
    <div class="todos-container">
        <ul class="todos-list">
            <div class="empty-text">The list is empty.</div>
        </ul>
        <div class="todo-select-container">
            <select class="todo-select">
                <?php foreach (['all', 'completed', 'uncompleted'] as $value) : ?>
                    <option value="<?= $value ?>" class="todo-select-option"><?= ucfirst($value) ?></option>
                <?php endforeach ?>
            </select>
        </div>
    </div>

    <!-- font awesome -->
    <link rel="stylesheet" href="<?= APP_PATH ?>lib/fonts/font-awesome/all.css">
</body>

</html>