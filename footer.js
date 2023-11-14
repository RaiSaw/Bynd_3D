let footer = `
    <footer class="footer d-flex flex-row flex-wrap justify-content-between align-items-center py-4 px-3 my-4 border-top"
    <div>
    <div class="col-md-2 d-flex space-x-4">
        <a href="/Homepage/index.html" id='cont' class="text-body-secondary text-decoration-none lh-1 rounded-circle">
          <img id="logo" class="h-8 w-auto" src="/Assets/bynd.png" alt="Logo">
        </a>
        <span class="text-body-secondary align-self-center">&copy; Bynd 2023</span>
      </div>
      <!-- <p class="nav col-md-4 justify-content-center"><a href="#">Privacy</a> • <a href="#">Terms</a></p> -->
      <ul class="nav col-md-4 d-flex align-items-center justify-content-end">
        <li class="nav-item"><a href="/Homepage/index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="/Gallery/index.html" class="nav-link px-2 text-body-secondary">Gallery</a></li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Learn</a></li>
              <li><a class="dropdown-item" href="#">Create</a></li>
              <li><a class="dropdown-item" href="#">Generate with AI ✨</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Connect
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">About</a></li>
          <li><a class="dropdown-item" href="#">FAQs</a></li>
          <li><a class="dropdown-item" href="#">Community</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="/Contact/card.html">Contact us</a></li>
        </ul>
      </li>
      </ul>
      </div>
    </footer>`
document.getElementById("footer").innerHTML= footer;