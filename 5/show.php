<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/show.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
   
  </head>
  <body>
    
    <div id="container">
      <h2>Data Export Page</h2>
      <a href="" target="/5/response-five.csv" class="db-flush" download><button> Download the data for Google Spreadsheet (UTF-8)</button></a>
      <br/>
      <a href="" target="/5/response-excel-five.csv" class="db-flush" download><button> Download the data for MS Excel (WINDOWS-1252) </button></a>
      <table></table>
	  </div>
    <script type="text/javascript">
      $(document).ready(function() {
        $(".db-flush").click(function(e) {
          var button = $(this);
          e.preventDefault();
          $.ajax({
            url: "/5/flush.php",
            type: "POST",
            data: "request-flush",
            success: function() {
              window.location.href = button.attr('target');
            }
          });
        });
      });
    </script>
  </body>
</html>
