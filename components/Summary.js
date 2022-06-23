export default function Summary (props){
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col w-full text-center">
                <h2 class="text-xs font-medium tracking-widest text-indigo-500 title-font leading-4">{props.greets}</h2>
                <h1 class="text-2xl font-medium text-gray-900 sm:text-3xl title-font help_title ">{props.title}</h1>
                <p class="mx-auto text-base leading-relaxed lg:w-2/3 help_description">
                    {props.content}
                </p>
            </div>
        </div>
      </section>
    )
}