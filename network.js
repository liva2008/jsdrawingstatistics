let code = `
// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);
// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3}
]);`;

let page1 = `
<!doctype html>
<html>
<head>
  <title>Network</title>
  <script type="text/javascript" src="lib/vis-network.min.js"></script>
  <style type="text/css">
    #mynetwork {
      width: 640px;
      height: 480px;
      border: 1px solid lightgray;
    }
  </style>
</head>
<body>
<div id="mynetwork"></div>
<script type="text/javascript">
`;

 let page2 = `
  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
</script>
</body>
</html>
`;