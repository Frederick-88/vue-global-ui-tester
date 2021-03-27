<template>
  <div class="home">
    <h3>Global Buttons</h3>
    <i class="icon icon-lock" style="color: black"></i>
    <i class="icon icon-close" style="color: black"></i>
    <div class="home-button__wrapper">
      <GlobalButton :is-primary="true">Global-Primary-Button</GlobalButton>
      <GlobalButton :is-primary-outline="true"
        >Global-Primary-Outline-Button</GlobalButton
      >
      <GlobalButton :is-success="true">Global-success-Button</GlobalButton>
      <GlobalButton :is-success-outline="true"
        >Global-success-Outline-Button</GlobalButton
      >
      <GlobalButton :is-warning="true">Global-warning-Button</GlobalButton>
      <GlobalButton :is-warning-outline="true"
        >Global-warning-Outline-Button</GlobalButton
      >
      <GlobalButton :is-danger="true">Global-danger-Button</GlobalButton>
      <GlobalButton :is-danger-outline="true"
        >Global-danger-Outline-Button</GlobalButton
      >
      <GlobalButton :is-light="true">Global-light-Button</GlobalButton>
      <GlobalButton :is-light-outline="true"
        >Global-light-Outline-Button</GlobalButton
      >
      <GlobalButton :is-dark="true">Global-dark-Button</GlobalButton>
      <GlobalButton :is-dark-outline="true"
        >Global-dark-Outline-Button</GlobalButton
      >
      <GlobalButton :is-primary="true" :is-tall="true"
        >Global-Primary-Tall-Button</GlobalButton
      >
      <GlobalButton :is-primary="true" :is-short="true"
        >Global-Primary-Short-Button</GlobalButton
      >
    </div>

    <!------------------------------- -->
    <h3>Global Switch</h3>
    <div class="home__wrapper">
      <GlobalSwitch />
      <GlobalSwitch label="GlobalSwitch Label" />
      <GlobalSwitch :is-disabled="true" />
      <GlobalSwitch :is-checked="true" />
    </div>

    <!------------------------------- -->
    <h3>Global Checkbox</h3>
    <div class="home__wrapper">
      <input type="checkbox" />
      <GlobalCheckbox />
      <GlobalCheckbox label="remember me" />
      <GlobalCheckbox :is-checked="true" label="checked-default" />
      <GlobalCheckbox :is-checked="true" :is-primary="true" label="primary" />
      <GlobalCheckbox :is-checked="true" :is-success="true" label="success" />
      <GlobalCheckbox :is-checked="true" :is-warning="true" label="warning" />
      <GlobalCheckbox :is-checked="true" :is-danger="true" label="danger" />
    </div>

    <!------------------------------- -->
    <h3>Global Input</h3>
    <div class="home__wrapper--no-flex">
      <GlobalInput />
      <GlobalInput placeholder="Disabled Input" :is-disabled="true" />
      <GlobalInput placeholder="Readonly Input" :is-read-only="true" />
      <GlobalInput value="Input with value in first place" />
      <GlobalInput type="password" value="password" />
    </div>
    <div class="home__wrapper--no-flex">
      <GlobalInput label="Your phone number?" placeholder="085835538888" />
      <GlobalInput :is-tall="true" placeholder="Tall Input" />
      <GlobalInput :is-short="true" placeholder="Short Input" />
    </div>
    <div class="home__wrapper--no-flex">
      <GlobalInput :is-success="true" message="Your input success message" />
      <br />
      <br />
      <GlobalInput :is-warning="true" message="Your input warning message" />
      <br />
      <br />
      <GlobalInput :is-error="true" message="Your input error message" />
    </div>

    <!------------------------------- -->
    <h3 style="margin-top: 100px">Global Accordion</h3>
    <div class="home__wrapper--no-flex">
      <GlobalAccordion :items="accordionItems" icon="caret" />
      <GlobalAccordion :items="accordionItems" icon="plus" :is-primary="true" />
      <GlobalAccordion
        :items="accordionItems"
        icon="caret"
        :is-success="true"
      />
      <GlobalAccordion :items="accordionItems" icon="plus" :is-warning="true" />
      <GlobalAccordion :items="accordionItems" icon="caret" :is-danger="true" />
      <GlobalAccordion :items="accordionItems" icon="plus" :is-dark="true" />
    </div>

    <!------------------------------- -->
    <h3>Global Dropdown</h3>
    <div class="home__wrapper--no-flex">
      <GlobalDropdown :options="dropdownItems" />
      <GlobalDropdown
        :options="dropdownItems"
        value="blue"
        :auto-complete="true"
        autoCompletePlaceholder="Search Here"
        max-width="600px"
      />
      <GlobalDropdown
        :options="dropdownItems"
        value="blue"
        max-width="300px"
        max-height="60px"
      />
    </div>

    <!------------------------------- -->
    <h3>Global Preloader</h3>
    <div class="home__wrapper--no-flex">
      <GlobalAnimationLoader
        :file="jsonFile2"
        :width="400"
        text="Human JSON animated by After Effects"
      />
      <GlobalAnimationLoader :file="jsonFile" text="Default width/size" />
    </div>

    <!------------------------------- -->
    <h3>Global Base Dialog</h3>
    <div class="home__wrapper--no-flex">
      <GlobalButton @click="isShowDefaultDialog = true"
        >Open default dialog</GlobalButton
      >
      <GlobalBaseDialog
        :is-show="isShowDefaultDialog"
        title="Default dialog title"
        text="This is a dialog description"
        button1Text="yes"
        button2Text="no"
        @close="isShowDefaultDialog = false"
      >
        <p>This is a slot</p>
      </GlobalBaseDialog>

      <GlobalButton :is-primary="true" @click="isShowPrimaryDialog = true"
        >Open default dialog</GlobalButton
      >
      <GlobalBaseDialog
        :is-primary="true"
        :is-show="isShowPrimaryDialog"
        title="Default dialog title"
        text="This is a dialog description"
        button1Text="yes"
        button2Text="no"
        @close="isShowPrimaryDialog = false"
      >
        <p>This is a slot</p>
      </GlobalBaseDialog>

      <GlobalButton :is-warning="true" @click="isShowWarningDialog = true"
        >Open default dialog</GlobalButton
      >
      <GlobalBaseDialog
        :is-warning="true"
        :width="400"
        :is-show="isShowWarningDialog"
        title="Default dialog title"
        text="This is a dialog description"
        @close="isShowWarningDialog = false"
      >
        <p>This is a slot</p>
      </GlobalBaseDialog>

      <GlobalButton :is-danger="true" @click="isShowDangerDialog = true"
        >Open default dialog</GlobalButton
      >
      <GlobalBaseDialog
        :is-danger="true"
        :noButton="true"
        :is-show="isShowDangerDialog"
        title="Default dialog title"
        text="This is a dialog description"
        @close="isShowDangerDialog = false"
      >
        <p>This is a slot</p>
      </GlobalBaseDialog>

      <GlobalButton :is-success="true" @click="isShowSuccessDialog = true"
        >Open default dialog</GlobalButton
      >
      <GlobalBaseDialog
        :is-success="true"
        :is-show="isShowSuccessDialog"
        title="Default dialog title"
        text="This is a dialog description"
        @close="isShowSuccessDialog = false"
      >
        <p>This is a slot</p>
      </GlobalBaseDialog>
    </div>
  </div>
</template>

<script>
import laptopWorkingJson from "@/assets/files/laptop-working.json";
import rocketLoader from "@/assets/files/rocket-loader.json";
export default {
  name: "Home",
  data() {
    return {
      isShowDefaultCanvasModal: false,
      isShowPrimaryCanvasModal: false,
      isShowWarningCanvasModal: false,
      isShowDangerCanvasModal: false,
      isShowSuccessCanvasModal: false,
      isShowDefaultDialog: false,
      isShowPrimaryDialog: false,
      isShowWarningDialog: false,
      isShowDangerDialog: false,
      isShowSuccessDialog: false,
      jsonFile: rocketLoader,
      jsonFile2: laptopWorkingJson,
      dropdownItems: [
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Blue", value: "blue" },
        { name: "Red2", value: "red2" },
        { name: "Green2", value: "green2" },
        { name: "Blue2", value: "blue2" },
      ],
      accordionItems: [
        {
          title: "Accordion 1",
          text: "This is the value / content of Accordion 1",
        },
        {
          title: "Accordion 2",
          text: "This is the value / content of Accordion 2",
          isActive: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~node_modules/global-ui/src/assets/icomoon/style.scss";

.home {
  margin-bottom: 40px;
}
.home-button__wrapper {
  margin: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  margin-top: 2rem;
}
.home__wrapper--no-flex {
  margin: 0 40px;
  margin-top: 2rem;
}
.home__wrapper--no-flex > * {
  margin-top: 10px;
}
.home__wrapper > * {
  margin-right: 20px;
}
</style>
