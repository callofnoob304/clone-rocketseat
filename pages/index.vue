<template>
  <v-container class="mt-15">
    <v-row>
      <v-col class="d-flex justify-content-center align-center">
        <v-container>
          <div class="w-100">
            <SvgComponent class="mb-12" />

            <h1 style="font-size: 54px;">Faça seu login na plataforma</h1>
          </div>
        </v-container>
      </v-col>

      <v-col>
        <v-container>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            style="background-color: #272727; padding: 45px"
            class="rounded"
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="E-mail"
              required
              solo
              background-color="#121214"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Senha"
              required
              solo
              background-color="#121214"
            ></v-text-field>

            <span>
              <strong>
                <a href="#" style="text-decoration: none; color: #8257e6">
                  Esqueci minha senha
                </a>
              </strong>
            </span>
            <br />

            <v-btn
              block
              height="50px"
              :disabled="!valid"
              color="#8257e6"
              class="mt-5"
              @click="validate"
            >
              Entrar </v-btn
            ><br />

            <div class="text-center">
            <span class="text-center">
              Não tem conta?
              <strong>
                <a href="#" style="text-decoration: none; color: #8257e6">
                  Registre-se
                </a>
              </strong>
            </span>
            </div><br>

            <hr class="mb-5 white" >

            <div class="text-center">
            <span>
              Ou entre com
            </span>
            <v-btn style="background-color: #8257e6; margin-left: 24px; width: 40%; height: 50px;">
              <v-icon>mdi-github</v-icon>
              GITHUB
            </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layouts: 'default',
}
</script>
