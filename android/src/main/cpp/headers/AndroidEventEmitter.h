//
// 
//

#ifndef REANIMATEDEXAMPLE_ANDROID_EVENT_EMITTER_H
#define REANIMATEDEXAMPLE_ANDROID_EVENT_EMITTER_H

#include "EventEmitter.h"
#include <unordered_map>
#include <string>
#include <jni.h>

class AndroidEventEmitter : public EventEmitter {
  public:
    std::shared_ptr<jsi::Function> emit(std::string message) override;
    void addListener(std::string message, std::shared_ptr<jsi::Function>) override;
    virtual ~AndroidEventEmitter();
  private:
    std::unordered_map<std::string, std::shared_ptr<jsi::Function>> events;
};

#endif //REANIMATEDEXAMPLE_ANDROID_EVENT_EMITTER_H
