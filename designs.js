// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid(e) {
	e.preventDefault();
	$('table').children().remove();
	let row=$('#inputHeight').val();
	const column=$('#inputWeight').val();
  if(row >50 || column>50){
    window.alert("The maximum grid size should be 50x50");
  }
  else{
    for(let i=1;i<=row;i++)
		{
			 $('table').append('<tr></tr>');
			for(let j=1;j<=column;j++)
				{
					$('tr:last').append('<td></td>');
				}
		}
  }
	
	$('td').click(function(e){
	e.preventDefault();
	var color=$('#colorPicker').val()
	$(this).css('background-color',color)
})
	$('td').dblclick(function(e){
	e.preventDefault();
	$(this).css('background-color','transparent')
})
});
