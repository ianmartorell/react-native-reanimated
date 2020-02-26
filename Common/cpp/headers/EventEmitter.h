//
// 
//

#ifndef REANIMATEDEXAMPLE_EVENT_EMITTER_H
#define REANIMATEDEXAMPLE_EVENT_EMITTER_H

#include <string>
#include <memory>

#ifdef ONANDROID
  #include "TurboModule.h"
#else
  #include <ReactCommon/TurboModule.h>
#endif

using namespace facebook;

class EventEmitter {
  public:
    virtual std::shared_ptr<jsi::Function> emit(std::string message) = 0;
    virtual void addListener(std::string message, std::shared_ptr<jsi::Function>) = 0;
    virtual ~EventEmitter() {};
};

#endif //REANIMATEDEXAMPLE_EVENT_EMITTER_H
