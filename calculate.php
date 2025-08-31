<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $weight = $_POST['weight'];
    $height = $_POST['height'];

    if (!empty($weight) && !empty($height) && $weight > 0 && $height > 0) {
        $heightInMeters = $height / 100;
        $bmi = round($weight / ($heightInMeters * $heightInMeters), 2);

        if ($bmi < 18.5) $category = 'Underweight';
        else if ($bmi >= 18.5 && $bmi <= 24.9) $category = 'Normal weight';
        else if ($bmi >= 25 && $bmi <= 29.9) $category = 'Overweight';
        else $category = 'Obese';

        echo "<h1>Your BMI is $bmi ($category)</h1>";
        echo "<a href='index.html'>Go Back</a>";

       
        include 'db_connect.php';

        $stmt = $conn->prepare("INSERT INTO bmi_records (weight, height, bmi, category) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ddds", $weight, $height, $bmi, $category);
        $stmt->execute();
        $stmt->close();
        $conn->close();

    } else {
        echo "Please enter valid weight and height.";
    }
}
?>
