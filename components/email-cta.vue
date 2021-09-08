<template>
    <div class="email-cta__inner">
      <form
        ref="formRef"
        :name="form_name"
        method="post"
        action="https://newbelgium.us2.list-manage.com/subscribe/post?u=5ad542c6d64eb611418ad80a2&amp;id=add9fc7014"
        target="_blank"
        :class="{ succeeded, processing }"
        @submit="onSubmit"
      >
        <input type="text" id="filter" name="" tabindex="-1" value="" aria-label="Honeypot">
        <div
          class="fieldset"
          :class="['email', {
            error: !email.focused && email.error || (send_attempted && !email.value),
            focused: email.focused || (email.value && email.value.length > 0)
          }]"
        >
          <div class="field label">
            <label :for="`cf-email`">Email</label>
          </div>
          <div class="field">
            <input
              :id="`cf-email`"
              v-model="email.value"
              type="text"
              name="EMAIL"
              @focus="email.focused = true"
              @blur="email.focused = false"
            >
          </div>
        </div>
        <div class="fieldset success" :class="{active: succeeded}">{{ success_message }}</div>
        <button class="button red" type="submit" :id="`${form_name}-submit`" :disabled="!ready_to_send" />
        <label
          class="submit-button"
          :class="{ loading: processing }"
          :for="`${form_name}-submit`"
        />
      </form>
      <p class="error" :class="{active: error}">{{ error_message }}</p>
    </div>
</template>