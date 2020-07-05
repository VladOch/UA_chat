<template>
  <q-page class="flex column">
    <q-banner inline-actions class="text-white bg-red-4 q-pa" >
          The user is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message of messages"
        :key="message.id"
        :name="message.fromMe == true ? 'Me' : 'Interlocutor'"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[message.name]"
        :stamp="[message.time]"
        :sent="message.fromMe"
        :bg-color="message.fromMe == true ? 'yellow' : 'Interlocutor'"
      />
    </div>
    <q-footer elevated>
      <q-toolbar class="q-pt-md">
        <q-input
          bottom-slots
          label="Message"
          dense
          rounded
          standout
          bg-color="white"
          style="color: black"
          class="full-width"
          v-model="myMessage"
        >
          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              icon="send"
              color="white"
              @click="sendMessage"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      ph: "",
      dense: false,
      myMessage: "",
      messages: [
        {
          id: 0,
          name: "Hello",
          fromMe: true,
          time: "5 minutes ago"
        },
        {
          id: 1,
          name: "Hello",
          fromMe: false,
          time: "6 minutes ago"
        },
        {
          id: 2,
          name: "Whats up?",
          fromMe: true,
          time: "10 minutes ago"
        }
      ]
    };
  },
  methods: {
    sendMessage() {
      let newMessage = {
        id: this.messages[this.messages.length - 1].id++,
        name: this.myMessage,
        fromMe: true,
        time: `${new Date().getMinutes()} minutes ago`
      };
      this.messages.push(newMessage);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
