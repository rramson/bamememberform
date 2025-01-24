<?php

// Connecting, selecting database
$conn_string = "host=localhost dbname=dvdrental user=photohut password=Gwylt20!7";
$db_handle = pg_connect($conn_string)
or die('Could not connect / connection attempt failed: ' . pg_last_error());

// Performing SQL query
$query = 'SELECT distinct(last_name) FROM actor ORDER BY last_name';
$result = pg_query($db_handle, $query) or die('Query failed: ' . pg_last_error());

// Printing results in HTML
echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Free resultset
pg_free_result($result);

// Closing connection
pg_close($db_handle);
?>