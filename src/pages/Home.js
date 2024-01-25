import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Active learning: How to accelerate AI model training</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>
        Let’s face it: training an AI model isn’t much fun.

Imagine you were training an intern who’d just joined your company. This intern is extremely bright and can work at lightning speed for 24 hours a day without any breaks. This should be a dream come true, right? Except, they don’t know a thing about your business. They can’t tell the difference between a ‘thank you’ email and an urgent customer complaint. They have zero common sense and get even the most basic things wrong.

Anyone who’s ever started training an AI model for their business can probably relate to this example. The good news is that AI can be trained to understand your business accurately and carry out your most important processes. But it takes time and effort, and, usually, lots of data annotation.
        </p>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>The data annotation bottleneck</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>
        Put simply, data annotation helps AI understand and safely handle the data that drives your business processes.

Data annotation, also called data labeling, is the manual process of tagging raw data with relevant classifiers or ‘labels’. In business, it’s a crucial part of the process for training AI models to accurately recognize and correctly respond to patterns in your data. For example, helping a model tell the difference between a ‘thank you’ email and an urgent complaint. Or helping it correctly extract important data from a message, like a delivery address or customer number, which can be crucial for many valuable automations.

You could say that annotation has become the new programming. Increasingly, instead of programming what we want machines to do, we label examples for them to replicate. But that doesn’t stop it being a long and boring process for the people who do it!

Data annotation consumes about 80% of the time dedicated to any AI project. Subject matter experts (SMEs), often involving teams of employees, will typically spend hundreds of collective hours labeling thousands of individual examples. But add human error to the mix. Some labels will inevitably be wrong, impacting the AI’s understanding of the data and probably requiring even more time to repair the damage.

Many AI projects struggle to get off the ground as employees are often reluctant to annotate data. Even people paid to train AI models are now turning to AI to annotate the data for them. And that isn’t actually a bad idea. After all, one of the biggest reasons we use AI in business is to free ourselves from the work we don’t enjoy doing.

However, there’s a much better way to train AI quickly and accurately...
        </p>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Putting AI to work—faster</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>
        What’s the secret ingredient for AI success? Is it the models you use? Or how many data scientists and SMEs you hire to train them?

What really separates the AI leaders from the laggards is how fast they can ‘operationalize’ the technology. How quickly they can deploy AI in their business and how fast it starts creating value for them. Traditionally, this has been a real challenge for intelligent document processing (IDP). Training AI models to reliably understand and process documents and messages usually demands a big investment in time and effort.

That’s why UiPath uses active learning to accelerate time to value for customers using our leading AI capabilities for IDP.

UiPath Document Understanding and Communications Mining (both available via the UiPath Platform) enable users to quickly build custom AI models that can understand and automate documents and business communications. Thanks to active learning, these UiPath Platform capabilities start training with only a few annotated examples. SMEs and AI then work together to finetune model understanding by labeling only the most informative and valuable examples.

Our active learning approach—combined with the no-code, fully-guided user interface of the UiPath Platform—produces accurate, high-performing AI models in hours rather than weeks or months. For instance, the introduction of active learning in UiPath Document Understanding has seen 80% faster model training according to our internal tests. Models that used to take a week to train now need only a day before they’re ready for business.
        </p>
    </div>
  )
}

export default Home