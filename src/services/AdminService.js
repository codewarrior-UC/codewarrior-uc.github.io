class AdminService

{
   
    AdminLogin(data)
    {
         return fetch(`https://updatedgiftthink.herokuapp.com/users/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }

    createemployee (data)
        {
              return fetch("https://updatedgiftthink.herokuapp.com/employees/createemployee",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`       
                },
                body : JSON.stringify(data)
            })
        }
    

    employeeslist(data)
    {
         return fetch("https://updatedgiftthink.herokuapp.com/employees/employeeslist",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }



    employeerlist(data)
    {
         return fetch("https://updatedgiftthink.herokuapp.com/employers/employerslist",{

            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }
   
        adminlist(data)
    {
        return fetch("https://devapi.rupyo.in/users/rupyoadminlist",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }
    
    createemployer (data)
    {
        return fetch("https://updatedgiftthink.herokuapp.com/employers/createemployer",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }


     findemployee (data)
    {
        return fetch("https://updatedgiftthink.herokuapp.com/employees/findemployee",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }



    getemployer (data)
    {
        return fetch("https://updatedgiftthink.herokuapp.com/employers/getemployer",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body : JSON.stringify(data)
        })
    }


    ddlemployer()
    {
       return fetch("https://updatedgiftthink.herokuapp.com/employers/ddlemployerslist", {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
           },
           body : JSON.stringify()
       })
    }

CreateAdmin (data)
{
    return fetch("https://updatedgiftthink-app.herokuapp.com/employers/createemployer",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body : JSON.stringify(data)
    })
}

createvender (data)
{

     return fetch(" https://updatedgiftthink.herokuapp.com/users/createvender",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body : JSON.stringify(data)
    })
}
changestatusvender(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/users/changestatus", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}

findvender(data){
    return fetch(" https://updatedgiftthink.herokuapp.com/users/findvender", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}


ddlvenderlist()
{
 return fetch("https://updatedgiftthink.herokuapp.com/users/ddlvenderlist",{
    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body : JSON.stringify()
})
}



venderlist()
{
return fetch("https://updatedgiftthink.herokuapp.com/users/venderlist",{
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body : JSON.stringify()
})
}


findbirthday()
{
 return fetch(" https://updatedgiftthink.herokuapp.com/employees/findbirthdayaniversaryjoiningdate",{
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body : JSON.stringify()
})
}

changestatusemp(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/employees/changestatus", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}



changestatus(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/employers/changestatus", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}


dashboard()
{
 return fetch(" https://updatedgiftthink.herokuapp.com/employers/dashboard",{
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body : JSON.stringify()
})
}

orderslist()
{
   return fetch("https://updatedgiftthink.herokuapp.com/orders/orderslist", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify()
   })
}

placeorder(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/orders/placeorder", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}



orderassign(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/orders/orderassignedtovender", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}


orderstatus(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/orders/orderstatus", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}


companyname()
{
   return fetch("https://updatedgiftthink.herokuapp.com/employers/companyname", {
       method: "GET",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify()
   })
}


csvupload(data)
{
   return fetch("https://updatedgiftthink.herokuapp.com/employees/csvupload", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
       },
       body : JSON.stringify(data)
   })
}

} 

export default new AdminService();

 