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
		  <div id="logo">
        <a href="/"></a>
      </div>
      <h2>Data Export Page</h2>
      <a href="" target="/st/response.csv" download="" class="db-flush" id="dwn-utf"><button> Download the data for Google Spreadsheet (UTF-8)</button></a>
      <br/>
      <a href=""  target="/st/response-excel.csv" download="" class="db-flush" id="dwn-win"><button> Download the data for MS Excel (WINDOWS-1252) </button></a>
      <table></table>
	  </div>
    <script type="text/javascript">
      $(document).ready(function() {
        $(".db-flush").click(function(e) {
          var button = $(this);
          var data = "";
          if (button.attr("id") == "dwn-utf") {
            data = "utf";
          } else {
            data = "win";
          }
          e.preventDefault();
          var url = "/st/flush.php?type=" + data;
          window.location.href = url;
        });
      });
    </script>
  </body>
</html>
