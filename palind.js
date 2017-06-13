function palindromecheck()
{
	var str=document.getElementById('string').value;
	alert(str);
	var st="";
	for(var i=str.length;i>=0;i--)
	{
		var c=str.charAt(i);
		st=st+c;
	}
	alert(st);
	if(str===st)
	{
		alert("palindrome");
	}
	else
	{
		alert("not palindrome");
	}
}