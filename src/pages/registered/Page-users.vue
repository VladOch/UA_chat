<template>
  <q-list bordered>
    <q-item
      v-for="user in users"
      :key="user.id"
      class="q-my-sm"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ user.name.charAt(0) }}
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ user.name }}</q-item-label>
        <q-item-label caption lines="1">{{ user.email }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon
          name="chat_bubble"
          :color="user.online == false ? 'red' : 'green'"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          email: "rjedrzej0@discuz.net",

          online: true
        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          email: "malessandrini1@marketwatch.com",

          online: false
        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          email: "ewicklen2@microsoft.com",

          online: false
        },
        {
          id: 4,
          name: "Seka Fawdrey",
          email: "sfawdrey3@wired.com",

          online: true
        }
      ]
    };
  }
};
</script>
