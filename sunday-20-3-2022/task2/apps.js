// Java program to demonstrate switch case
// with primitive(int) data type



		
        // switch statement with int data type
		let day_name=prompt('could You Enter the number of the day');
        let day_num =Number(day_name)
        switch (day_num) {
		case 1:{
            alert('you insert sunday');
            console.log('you insert sunday');
			document.getElementById('day_name_p').innerHTML="sunday";
			break;
        }
		case 2:{
            alert('you insert monday');
            console.log('you insert monday');
			document.getElementById('day_name_p').innerHTML="monday";
			break;
        }
		case 3:{
            alert('you insert tusday');
            console.log('you insert tusday');
			document.getElementById('day_name_p').innerHTML="tusday";
			break;
        }
		case 4:{
            alert('you insert wednesday');
            console.log('you insert wendesday');
			document.getElementById('day_name_p').innerHTML="wednesday";
			break;
        }
		case 5:{
            alert('you insert thursday');
            console.log('you insert thursday');
			document.getElementById('day_name_p').innerHTML="thursday";
			break;
        }
		case 6:{
            alert('you insert friday');
            console.log('you insert friday');
			document.getElementById('day_name_p').innerHTML="friday";
			break;
        }
		case 7:{
            alert('you insert saturday');
            console.log('you insert saturday');
			document.getElementById('day_name_p').innerHTML="saturday";
			break;
        }
    }



