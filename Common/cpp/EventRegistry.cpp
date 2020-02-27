//
// 
//

#include "EventRegistry.h"
#include <jni.h>

void EventRegistry::notify(std::string message) {
    auto event = events.find(message);
    if (event == events.end()) {
        return;
    }
    event->second(message);
}

/*
    map: {
        'label1': callback1,
        'label2': callback2,
        ...
        'labeln': callbackn,
    }
*/

void EventRegistry::addListener(std::string message, std::function<void(std::string)> callback) {
    events.insert({ message, callback });
}
