<template>
  <div>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="registration" label="Registration" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="email" label="Your email *" lazy-rules />
            <q-input
              filled
              v-model="name"
              ref="name"
              label="Your name *"
              lazy-rules
            />
            <q-input
              filled
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
            />
            <q-toggle v-model="accept" label="I accept the license and terms" />
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="registration">
          <div class="text-h6">Registration</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="email" label="Your email *" lazy-rules />
            <q-input
              filled
              v-model="name"
              ref="name"
              label="Your name *"
              lazy-rules
            />
            <q-input
              filled
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
            />
            <q-toggle v-model="accept" label="I accept the license and terms" />
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      accept: false,
      tab: "mails"
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit() {
      this.$refs.name.validate();
      console.log(this.$refs);
    },
    onReset() {
      console.log("onReset");
    }
  }
};
</script>
<style scoped>
.center {
}
</style>
