.<template>
  <div class="login-profile-carousel">
    <LoginProfileCard :img="'cop'" />
    <LoginProfileCard :img="'esc'" />
    <LoginProfileCard :img="'extension'" />
  </div>
</template>

<script>
import LoginProfileCard from '@/components/Login/LoginProfileCard.vue';

export default {
  name: 'LoginProfileCarousel',
  components: { LoginProfileCard },
};
</script>

<style lang="stylus" scoped>
.login-profile-carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2em 0;
  padding: 2em 0;
  border: solid thin brown;
}
</style>
