function employee(name,age,salary,dob)
{
this.name=name;
this.age=age;
this.salary=salary;
this.dob=dob;
}
var emp1=new employee("radha",24,200000,13/05/1992);
var emp2=new employee("krishna",24,25000,15/08/1994);
var emp3=new employee("sahil",22,400,14/10/1996);
var emp4=new employee("ayushi",22,10000,17/08/1995);
var emp5=new employee("kartik",22,150,13/11/1996);
var empsalary=[emp1.salary,emp2.salary,emp3.salary,emp4.salary,emp5.salary];
var empname=[emp1.name,emp2.name,emp3.name,emp4.name,emp5.name];
var empage=[emp1.age,emp2.age,emp3.age,emp4.age,emp5.age];
var groupedemp=[];
var group=[];
var names="";
var flag=false;
var index=0,gindex=0,f=0;
console.log(" employes who have less than 5000 salary");
///check for employee who's salary is greater than 5000
for(var k in empsalary)
{
	if(empsalary[k]>5000)
	{
        console.log(empname[k] + " salary "+empsalary[k]);
	}
}
/// grouping with respect to age of employees

for(var k in empage)
{
	f=0;
	flag=false;
	names="";
	
	for( var i=0;i<groupedemp.length;i++)
	{
 if(k==groupedemp[i])
 {
 	i=groupedemp.length;
 	f=1;
 }

}
if(f==0)
{
	for(var j=k;j<empage.length;j++)
	{
		//// grouping is done only for those employess who's age get matched with  any other employee  /////
		if(empage[k]==empage[j])
		{
		        names=names+""+empname[j]+" - ";	
		       
		        groupedemp[gindex]=j;
		        gindex++;
		         flag=true;
		}
	}
	if(flag)
	{
	group[index]=names;
	index++;
    }
}

}

for(var k in group)
{
	console.log(group[k]);
}
for(var j in groupedemp)
{
	console.log(groupedemp[j]);
}

////////// third question /////
for(var i in empage)
{
	if(empage[i]>20 && empsalary[i]<1000)
	{
		if(i==0) 
		{
	     emp1.salary=empsalary[i]*5;
	    }
	    if(i==1)
	    {
	    
	     emp2.salary=empsalary[i]*5;
	    }
	    if(i==2)
	    {
	      emp3.salary=empsalary[i]*5;
        }
	     
	    if(i==3)
	    {
	      emp4.salary=empsalary[i]*5; 
	    }
	    if(i==4)
	    {
	     	  
	     emp5.salary=empsalary[i]*5;
	     	  
	    }

		}
	}
	
 console.log(" sahil "+emp3.salary+" kartik "+ emp5.salary);

