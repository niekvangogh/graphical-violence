<template>
    <div>
        <div class="wrapper">
            <div class="close" @click="$router.go(-1)"></div>
            <h1 class="title">
                COMMUNITY STANDARDS
            </h1>
            <div>
                <p class="bold">Do not post:</p>
                <p>
                    Imagery of violence committed against real people or animals with comments or captions by
                    the poster or comments under such imagery that contain: 
                </p>
                <p>
                <ul>
                    <li>Enjoyment of suffering</li>
                    <li>Enjoyment of humiliation</li>
                    <li>Erotic response to suffering</li>
                    <li>Remarks that speak positively of the violence</li>
                    <li>Remarks indicating that the poster is sharing footage for sensational viewing pleasure</li>
                </ul>
                </p>
                <p>
                    Videos of dying, wounded or dead people if they contain:
                </p>
                <p>
                <ul>
                    <li>Dismemberment, unless in a medical setting Visible internal organs; partially decomposed bodies</li>
                    <li>Charred or burning people unless in the context of cremation or self-immolation when that action is a form of political speech or newsworthy </li>
                    <li>Victims of cannibalism</li>
                    <li>Throat-slitting</li>
                </ul>
                </p>
                <p>
                    Videos or photos that depict non-sexual child abuse, defined as:
                </p>
                <p>
                <ul>
                    <li>Repeated kicking, beating, slapping or stepping on by an adult or animal</li>
                    <li>Strangling or suffocating by an adult or animal</li>
                    <li>Drowning by an adult or animal</li>
                    <li>Biting through skin by an adult or animal</li>
                    <li>Poisoning by an adult</li>
                    <li>Forcible restraint by an adult</li>
                    <li>Inflicting of burn or cut wounds by an adult</li>
                    <li>Forcible smoking </li>
                    <li>Tossing, rotating or shaking of an infant (too young to stand) by their wrists/ankles, arms/legs or neck</li>
                    <li>Videos and photos showing violent death of persons can be removed if requested by a family member.</li>
                </ul>
                </p>
                <p class="bold">
                    For the following content, we include a warning screen so that people are aware that the
                    content may be disturbing. We also limit the ability to view the content to adults, aged
                    eighteen and older:
                </p>
                <p>
                    Imagery featuring mutilated people if it contains the following in a medical setting:
                </p>
                <p>
                <ul>
                    <li>Dismemberment</li>
                    <li>Visible internal organs; partially decomposed bodies</li>
                    <li>Charred or burning people, including cremation or self-immolation when that action is a form of political speech or newsworthy</li>
                    <li>Victims of cannibalism</li>
                    <li>Throat-slitting</li>
                </ul>
                </p>
                <p>
                    Photos of wounded or dead people if they show:
                </p>
                <p>
                <ul>
                    <li>Dismemberment</li>
                    <li>Visible internal organs; partially decomposed bodies</li>
                    <li>Charred or burning people</li>
                    <li>Victims of cannibalism</li>
                    <li>Throat-slitting</li>
                </ul>
                </p>
                <p>
                    Imagery featuring animals that shows:
                </p>
                <p>
                <ul>
                    <li>Dismemberment</li>
                    <li>Visible internal organs</li>
                    <li>Charred or burning animals</li>
                </ul>
                </p>
                <p>
                    Animal abuse, defined as:
                </p>
                <p>
                <ul>
                    <li>Repeated kicking or beating of an animal by a person</li>
                    <li>Acts of torture by a person committed against animals</li>
                    <li>Biting of an animal for abusive purposes</li>
                    <li>Imagery of animal fights when innards or dismemberment are visible, unless in the wild</li>
                    <li>Animals being killed or showing animal mutilation in a hunting, manufacturing or food preparation/processing context</li>
                </ul>
                </p>
                <p>
                    Videos that show the violent death of a person or people by accident or murder
                </p>
                <p>
                    Still images depicting the violent death of a person or people
                </p>
                <p>
                    Videos that show acts of torture committed against a person or people Videos of physical
                    bullying or violence against minors in a fight context shared with a condemning caption
                </p>
                <p>
                    Photos and videos of non-medical foreign objects (such as metal objects, knifes, nails)
                    involuntarily inserted or stuck inside people or animals causing grievous injury
                </p>
                <p class="bold">
                    For the following content, we include a label so that people are aware the content may be
                    sensitive:
                </p>
                <p>
                    Imagery of foetuses that show:
                </p>
                <p>
                <ul>
                    <li>Dismemberment</li>
                    <li>An abortion or abandonment context</li>
                    <li>Imagery of newborn babies in an abandonment context</li>
                </ul>
                </p>
                <p>
                    Photos and videos of animals in a ritual slaughter context showing dismemberment, or
                    visible innards, or charring and burning Imagery of visible innards in a birthing context
                    Imagery of non-medical foreign objects voluntarily inserted or stuck inside a human
                    through skin in religious or cultural context. &#x25A0;

                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

@Component
export default class Help extends Vue {}
</script>

<style lang="scss">

.wrapper {
    background-image: url('../assets/images/background3.png');
    background-attachment: fixed;
    background-size: cover;  
    background-repeat: no-repeat;
    overflow-y: scroll;
    padding: 40px;

  .close {
      background-image: url('../assets/images/close.png');
      background-size: cover;
      height: 30px;
      width: 30px;
      top: 15px;
      right: 15px;
      position: absolute;
  }

  .title {
    color: #d90000;
    font-size: 41px;
    line-height: 40px;
    margin-bottom: 90px;
  }

p {
    margin-bottom: 30px;
    font-size: 26px;

    &.bold {
        font-weight: 700;
    }
}  
ul {
    padding-left: 40px;
}
}
</style>
