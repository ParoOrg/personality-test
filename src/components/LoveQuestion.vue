<template>
    <div class="flex-col mx-8 my-4">

        <div
        
        class="border border-primary text-primary rounded-full hidden sm:block self-start mb-3 w-48 py-2"
        >
        {{ $t("question_number", n) }}
        </div>
        <div class="flex">
        
        <button
            @click="emitData(0)"
            class="group bg-white rounded-lg shadow-2xl  w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r  outline-none mx-4"
            :class="
                selection == 0
                ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
                : 'text-primary'
            "
            >
                <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
                <p class="parg  flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto m-2 ">
                    <!-- {{ $t("mAgree") }} -->
                    {{questionsLove.options[0].text[$i18n.locale]}}
                    <!-- {{questionLove.options.text}} -->
                    
                </p>
                </div>
        </button>

        <button
            @click="emitData(1)"
            class="group bg-white rounded-lg shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r  outline-none"
            :class="
                selection == 1
                ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
                : 'text-primary'
            "
            >
                
                <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
                <p class=" parg flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
                    {{questionsLove.options[1].text[$i18n.locale]}}
                    <!-- {{ $t("mAgree") }} -->
                    <!-- {{questionLove.options.text}} -->
                </p>
                </div>
            </button>
            <h1></h1>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "LoveQuestion",
    props : {
        questionsLove: {
            type: Object,
        
            },
            n: {
                type: Number,
                default: 1,
            },
    },
    data()  {
        return {
            selection: 3
        }      
    },
    emits: ["passData"],
    methods: {
           emitData (selectionNumber) {
this.selection=selectionNumber
      this.$emit('passData',[this.questionsLove._id,selectionNumber] )
    }
     },
}
</script>

<style  scoped>
.border-custom-6:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-6 {
  border-color: #2ffe66;
  color: #2ffe66;
}

.border-custom-5:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-5 {
  border-color: #55d85c;
  color: #55d85c;
}

.border-custom-4:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-4 {
  border-color: #7cae4f;
  color: #7cae4f;
}

.border-custom-3:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-3 {
  border-color: #a98142;
  color: #a98142;
}

.border-custom-2:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-2 {
  border-color: #df4b33;
  color: #df4b33;
}

.border-custom-1:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-1 {
  border-color: #ff2a29;
  color: #ff2a29;
}

.transition {
  transition: 0.5s;
}

.transition:focus {
  outline: none;
}
.parg{
  line-height: 1;
  overflow-wrap: anywhere;
  display: inline;
  white-space: pre-wrap;
  

}

</style>