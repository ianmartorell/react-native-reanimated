//
// 
//

#include "AndroidEventEmitter.h"
#include <jni.h>

AndroidEventEmitter::~AndroidEventEmitter() {}

std::shared_ptr<jsi::Function> AndroidEventEmitter::emit(std::string message) {
    auto event = events.find(message);
    if (event == events.end()) {
        return nullptr;
    }
    return event->second;
}

/*
    map: {
        'label1': callback1,
        'label2': callback2,
        ...
        'labeln': callbackn,
    }
*/

void AndroidEventEmitter::addListener(std::string message, std::shared_ptr<jsi::Function> callback) {
    events.insert({ message, callback });
}
