<template>
  <div class="home">
    <div class="row">
      <div class="col-md-5 mb-3">
        <div id="card-about" class="card mb-3">
          <div class="card-body">
            <h2>Mustafa Yurdakul</h2>
            <vue-typed-js
              :strings="[' Hackintosh ', ' Linux']"
              :loop="true"
              :showCursor="true"
              :smartBackspace="true"
              :backSpeed="50"
            >
              <p>
                CS & Addicted to
                <span class="typing"></span>
              </p>
            </vue-typed-js>
            <a href="https://www.github.com/mustafayurdakul" style="text-decoration: none;">
              <p class="linked">
                <font-awesome-icon class="mr-2" :icon="['fab', 'github']" />github.com/yurdakul
              </p>
            </a>
            <a href="https://www.hackerrank.com/yurdakulmustafa" style="text-decoration: none;">
              <span class="linked">
                <font-awesome-icon class="mr-2" :icon="['fab', 'hackerrank']" />hackerrank.com/yurdakul
              </span>
            </a>
          </div>
        </div>
        <div id="card-about" class="card mb-3">
          <div class="card-body">
            <a href="mailto:yurdakulmustafa@outlook.com" style="text-decoration: none;">
              <p class="linked">
                <font-awesome-icon class="mr-2" icon="envelope-open-text" />yurdakulmustafa@outlook.com
              </p>
            </a>

            <font-awesome-icon class="mr-2" icon="map-marked-alt" />Kocaeli, Turkey
          </div>
        </div>
        <div id="card-about" class="card">
          <div class="card-body">Fan Art by Emily Sanborn.</div>
        </div>
      </div>
      <div class="col mb-3">
        <div id="card-interest" class="card">
          <div class="card-body">
            <h3>Interests</h3>
            <p>Topics that I have been working on and want to learn more about.</p>
            <div class="row mt-3">
              <div class="col">
                <div id="card-in-col" class="card mb-3">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      />
                    </svg>
                  </div>
                  <div class="card-body text-center">Javascript</div>
                </div>
              </div>
              <div class="col">
                <div id="card-in-col" class="card mb-3">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <polygon
                        fill="#81c784"
                        points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
                      />
                      <polygon
                        fill="#455a64"
                        points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
                      />
                    </svg>
                  </div>
                  <div class="card-body text-center">Vue.js</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div id="card-in-col" class="card mb-3">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#80deea"
                        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                      />
                      <path
                        fill="#80deea"
                        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                      />
                      <path
                        fill="#80deea"
                        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                      />
                      <circle cx="24" cy="24" r="4" fill="#80deea" />
                    </svg>
                  </div>
                  <div class="card-body text-center">React</div>
                </div>
              </div>
              <div class="col">
                <div id="card-in-col" class="card mb-3">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#30dc80"
                        d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"
                      />
                      <path
                        fill="#30dc80"
                        d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"
                      />
                      <path
                        fill="#30dc80"
                        d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"
                      />
                    </svg>
                  </div>
                  <div class="card-body text-center">Android</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div id="card-in-col" class="card">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#FF6D00"
                        d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.208-1.791,4-4,4H10c-2.209,0-4-1.792-4-4V10z"
                      />
                      <path
                        fill="#E64A19"
                        d="M6,10v11.967l4,4c0,0,11.153,12.881,20,4.033s-3.981-19-3.981-19l-5.005-5H10C7.791,6,6,7.79,6,10z"
                      />
                      <path
                        fill="#FFF"
                        d="M26.019,11c11.429,7.698,7.732,16.187,7.732,16.187s3.25,3.634,1.936,6.813c0,0-1.34-2.226-3.588-2.226c-2.166,0-3.44,2.226-7.8,2.226C14.591,34,10,25.967,10,25.967c8.747,5.7,14.719,1.663,14.719,1.663C20.778,25.364,12,14,12,14c7.299,6.155,11,8,11,8c-1.882-1.542-8-9-8-9c4.224,4.238,13.307,10.378,13.307,10.378C30.691,16.834,26.019,11,26.019,11z"
                      />
                    </svg>
                  </div>
                  <div class="card-body text-center">Swift</div>
                </div>
              </div>
              <div class="col">
                <div id="card-in-col" class="card">
                  <div id="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="120"
                      height="120"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#F44336"
                        d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                      />
                      <path
                        fill="#F44336"
                        d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                      />
                      <g>
                        <path
                          fill="#1565C0"
                          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                        />
                        <path
                          fill="#1565C0"
                          d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                        />
                        <path
                          fill="#1565C0"
                          d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                        />
                        <path
                          fill="#1565C0"
                          d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                        />
                        <path
                          fill="#1565C0"
                          d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="card-body text-center">Java</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
#card-about,
#card-interest {
  color: rgb(229, 229, 234);
  background-color: rgb(28, 28, 30);
}

#card-in-col {
  color: rgb(229, 229, 234);
  background-color: rgb(44, 44, 46);
}

.linked:hover {
  color: rgb(48, 209, 88);
}

#card-icon {
  margin-top: 20px;
  text-align: center;
}
</style>
<script>
</script>
