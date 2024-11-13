 var p = document.querySelector('p')

 //show text
  p.textContent

  p.textContent = "new"

  //show actual HTML

  p.innerHTML

  //Edit HTML

  p.innerHTML = "<strong>IAM UNPREDICTBLE</strong>"

  //atributes

  var special = document.querySelector("#special")
  var specialA = special.querySelector('a')

  specialA.getAttribute("href")

  specialA.setAttribute("href","https://www.amazon.com")